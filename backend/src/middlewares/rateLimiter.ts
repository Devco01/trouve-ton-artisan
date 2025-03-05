import rateLimit from 'express-rate-limit';

// Limiter le nombre de requêtes par IP
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true, // Retourne les informations de limite dans les en-têtes `RateLimit-*`
  legacyHeaders: false, // Désactive les en-têtes `X-RateLimit-*`
  message: 'Trop de requêtes, veuillez réessayer plus tard.'
});

// Limiter le nombre de requêtes pour les routes sensibles
export const sensitiveRouteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 10, // Limite chaque IP à 10 requêtes par fenêtre
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Trop de requêtes pour cette route sensible, veuillez réessayer plus tard.'
}); 