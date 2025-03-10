import { Request, Response } from 'express';
import { Artisan } from '../models';
import nodemailer from 'nodemailer';

export const contactArtisan = async (req: Request, res: Response) => {
  try {
    const { artisanId } = req.params;
    const { name, email, subject, message } = req.body;
    
    // Validation des données
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }
    
    // Vérifier que l'artisan existe
    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé' });
    }
    
    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Contenu de l'email
    const mailOptions = {
      from: `"Trouve ton artisan" <${process.env.SMTP_USER}>`,
      to: artisan.get('email'),
      replyTo: email,
      subject: `[Trouve ton artisan] ${subject}`,
      html: `
        <h2>Nouveau message de contact via Trouve ton artisan</h2>
        <p><strong>De :</strong> ${name} (${email})</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Ce message a été envoyé via le formulaire de contact de la plateforme Trouve ton artisan.</p>
      `,
    };
    
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return res.status(500).json({ message: 'Erreur lors de l\'envoi du message' });
  }
}; 