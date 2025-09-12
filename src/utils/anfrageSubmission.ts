import { prisma } from './prismaClient';
import { sendAnfrageEmail, AnfrageSubmission } from './emailService';

export async function submitAnfrage(submission: AnfrageSubmission) {
  try {
    // Validate input
    if (!submission.name || !submission.email || !submission.unterlagen) {
      throw new Error('Missing required fields');
    }

    // Save submission to database
    const savedSubmission = await prisma.anfrageSubmission.create({
      data: {
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        message: submission.message,
        unterlagen: submission.unterlagen
      }
    });

    // Send email
    await sendAnfrageEmail(submission);

    return savedSubmission;
  } catch (error) {
    console.error('Error submitting anfrage:', error);
    throw error;
  } finally {
    // Always disconnect Prisma client to prevent connection leaks
    await prisma.$disconnect();
  }
}
