import { Request, Response, NextFunction } from 'express';

// Middleware pour gérer les erreurs
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erreur:', err.message);
  
  // Vérifier si l'erreur est une erreur de validation Sequelize
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      message: 'Erreur de validation',
      errors: (err as any).errors.map((e: any) => ({
        message: e.message,
        field: e.path
      }))
    });
  }
  
  // Erreur par défaut
  return res.status(500).json({
    message: 'Erreur serveur',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
}; 