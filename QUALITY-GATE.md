# Site Quality Gate — Patrícia Pimenta

Status: APROVADO | ATENÇÃO | FALHOU | NÃO APLICÁVEL

## Conversão e UX
1. CTA principal na primeira dobra — APROVADO
2. CTAs claros e consistentes — APROVADO
3. CTA fixo no mobile — APROVADO
4. Promessa de tempo de resposta — NÃO APLICÁVEL (não há prazo confirmado)
5. Página de obrigado — ATENÇÃO (criada, mas formulário próprio ainda não integrado)
6. Formulários com validação — NÃO APLICÁVEL (site usa WhatsApp/Dietbox como conversão principal)
7. URLs amigáveis — APROVADO
8. Cases/resultados — NÃO APLICÁVEL (não há material autorizado)
9. Avaliações reais — APROVADO (fonte Dietbox)
10. Mapas/endereço/rotas — ATENÇÃO (endereço presente; mapa incorporado não adicionado)
11. Responsividade — APROVADO (CSS responsivo implementado)

## SEO on-page e técnico
12. Meta title único — APROVADO
13. Meta description única — APROVADO
14. H1 único/hierarquia — APROVADO
15. Conteúdo sem duplicação desnecessária — APROVADO
16. Alt text — APROVADO
17. Breadcrumbs — NÃO APLICÁVEL (one-page)
18. FAQ + schema — ATENÇÃO (FAQ presente; FAQ schema não incluído para evitar marcação excessiva)
19. URLs amigáveis — APROVADO
20. Canonical — ATENÇÃO (placeholder até domínio)
21. robots.txt — ATENÇÃO (placeholder até domínio)
22. sitemap.xml — ATENÇÃO (placeholder até domínio)
23. 404 personalizada — APROVADO
24. Favicon — APROVADO
25. Open Graph — APROVADO
26. Imagem social — APROVADO
27. Dados estruturados — APROVADO (Dietitian)
28. Search Console — ATENÇÃO (depende de domínio)
29. Links quebrados — APROVADO em validação estática local
30. Indexabilidade — ATENÇÃO (domínio final pendente)

## Performance, segurança e confiabilidade
31. Compressão de imagens — APROVADO
32. Formatos modernos — ATENÇÃO (PNG/JPG por compatibilidade; pode converter para WebP/AVIF na produção)
33. Lazy loading — ATENÇÃO (poucas imagens; hero é crítico)
34. PageSpeed/Lighthouse — ATENÇÃO (requer URL publicada)
35. Core Web Vitals — ATENÇÃO (requer ambiente publicado)
36. Fontes/CSS/JS — APROVADO em estrutura; Google Fonts é dependência externa
37. HTTPS/SSL — ATENÇÃO (depende de hospedagem)
38. Headers de segurança — ATENÇÃO (depende de hospedagem)
39. Anti-spam — NÃO APLICÁVEL (sem formulário próprio)
40. Tratamento seguro de dados — APROVADO (sem coleta local)
41. Política de Privacidade — ATENÇÃO (modelo inicial; revisar em produção)
42. Cookies/consentimento — NÃO APLICÁVEL na demo sem analytics
43. Dados profissionais no rodapé — APROVADO

## Analytics e conversão
44. Analytics — ATENÇÃO (não ativado sem ID real)
45. Eventos — ATENÇÃO (hooks prontos; conectar GA4/GTM)
46. Cliques WhatsApp monitoráveis — APROVADO (data-track)
47. Formulários monitoráveis — NÃO APLICÁVEL
48. UTM — ATENÇÃO (pode ser acrescentado em produção)
49. LeadPilot CRM — ATENÇÃO (depende da integração)
50. Teste real de eventos — ATENÇÃO (requer analytics publicado)

## Conteúdo e identidade
51. Logo/identidade — APROVADO
52. Informações reais — APROVADO
53. Telefone/WhatsApp — APROVADO
54. Endereço/horários — ATENÇÃO (endereço conferido; horários não publicados por falta de fonte)
55. Serviços — APROVADO
56. Fotos reais autorizadas — APROVADO (material enviado pelo usuário)
57. Profissional — APROVADO
58. Avaliações reais — APROVADO
59. Conteúdo adaptado ao segmento/local — APROVADO
60. Conteúdo regulamentado — ATENÇÃO (revisão profissional antes da publicação final recomendada)

## Validação final
61. Desktop — APROVADO em layout responsivo estático
62. Mobile — APROVADO em CSS responsivo
63. Formulários — NÃO APLICÁVEL
64. CTAs — APROVADO
65. Links externos — APROVADO por estrutura
66. WhatsApp/telefone — APROVADO
67. Auditoria SEO — APROVADO estrutural / ATENÇÃO para domínio
68. Acessibilidade básica — APROVADO estrutural
69. Performance — ATENÇÃO até Lighthouse publicado
70. Segurança — ATENÇÃO até hospedagem real
71. Domínio/SSL — ATENÇÃO
72. Site Quality Score — calculado abaixo

Aplicáveis: 60
Aprovados: 35
Atenção: 25
Falhou: 0
N/A: 12

Score = (35 + 25×0,5) / 60 = 79,2%

## Bloqueadores para READY FOR PRODUCTION
- Definir domínio real e atualizar canonical/robots/sitemap/schema.
- Publicar em HTTPS.
- Rodar Lighthouse/PageSpeed na URL publicada.
- Validar política de privacidade conforme analytics/cookies usados.
- Conectar analytics/CRM somente com IDs e credenciais reais.
- Revisar o conteúdo profissional/regulatório antes da publicação definitiva.
