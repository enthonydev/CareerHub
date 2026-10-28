# Arquitetura v0.1

Fluxo: navegador React (localhost:5173) → FastAPI (127.0.0.1:8000) → regras determinísticas e armazenamento local JSON/documentos. OpenAI API será um adaptador opcional futuro, nunca requisito para abrir ou editar documentos.

## Restrições

- Windows, i3-7020U, 8 GB RAM, HDD; sem Docker, Ollama, SSD ou DB obrigatório.
- Dados pessoais ficam fora do repositório. Não armazenar chaves no frontend.
- Validação de uploads, tamanho, tipo, caminhos; gravações atômicas e backup quando storage for implementado.
- Consentimento explícito por envio à OpenAI, controle de custos e fallback offline.
- Métricas de compatibilidade são heurísticas auditáveis, não chance de contratação.

## ADR-001

Decisão em 2026-10-28: stack React/TypeScript/Vite + FastAPI + JSON local. Mudanças estruturais exigem proposta e aceite antes da implementação.

## Estado

S0 inclui apenas health check e tela de fundação. Serviços de IA, matching e storage são futuros.
