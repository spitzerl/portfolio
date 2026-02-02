import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || "");

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await request.json() as ContactRequest;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }

    // Vérifier le token reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json() as {
      success: boolean;
      score: number;
      action: string;
      challenge_ts: string;
      hostname: string;
    };

    // reCAPTCHA v3 retourne un score de 0.0 à 1.0
    // 1.0 = très probablement un utilisateur légitime
    // 0.0 = très probablement un bot
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: 'Vérification reCAPTCHA échouée. Vous semblez être un bot.' },
        { status: 403 }
      );
    }

    // Envoyer l'email avec Resend
    const response = await resend.emails.send({
      from: 'contact@lucasspitzer.fr',
      to: 'spitzer.lucas@proton.me',
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message du formulaire de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Score reCAPTCHA:</strong> ${recaptchaData.score}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (response.error) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}