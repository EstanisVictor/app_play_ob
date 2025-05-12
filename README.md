# 🎵 Music School App

Aplicativo web e mobile para gestão educacional de uma escola de música, voltado para o acompanhamento da prática dos alunos, atribuição de atividades e gamificação por pontuação. Desenvolvido com arquitetura moderna e escalável.

## 📱 Plataformas
- Aplicativo Mobile (React Native)
- Plataforma Web (React + Next.js)

---

## 🧩 Funcionalidades

### 👨‍👩‍👧 Pais
- Marcar sessões de estudo dos filhos (data e tempo).
- Visualizar pontuação acumulada das crianças.

### 👧 Alunos
- Visualizar suas pontuações e ranking.
- Acessar atividades atribuídas por professores.

### 🎓 Professores
- Criar atividades genéricas ou específicas para alunos.
- Acompanhar progresso dos alunos.

### 🛠️ Administradores
- Acesso global aos dados (usuários, pontuações, tarefas).
- Gestão geral da plataforma.

---

## ⚙️ Tecnologias Utilizadas

### Backend
- Node.js + Express (API REST)
- PostgreSQL
- Microsserviços (User, Score, Assignment)
- Prisma ORM
- JWT para autenticação
- Docker (dev environment)

### Frontend Web
- Next.js + React + TypeScript
- Arquitetura MVC
- Axios + React Query
- TailwindCSS

### Mobile
- React Native
- Expo
- React Navigation
- React Query

---

## 🧱 Arquitetura

A aplicação é composta por:
Mobile App / Web App
↓
Frontend (Next.js/React/MVC)
↓
API Gateway (futuro)
↓
REST API (Node + Express)
↓
┌───────────────┬─────────────────┬────────────────────┐
│ User Service │ Score Service │ Assignment Service │
└──────┬────────┴─────┬───────────┴───────────┬────────┘
↓ ↓ ↓
PostgreSQL (schemas separados)

### 🔹 Microsserviços

#### 1. **User Service**
- Cadastro e autenticação
- Gestão de perfis e papéis

#### 2. **Score Service**
- Registro de horas de estudo
- Cálculo de pontuação e rankings

#### 3. **Assignment Service**
- Atividades genéricas ou específicas
- Rastreamento de tarefas concluídas

---

🛡️ Segurança
Senhas com hash (bcrypt)

Tokens JWT com expiração

Verificação de roles nas rotas

📈 Escalabilidade futura
API Gateway

Mensageria (RabbitMQ, Kafka)

Monitoramento (Prometheus + Grafana)

CI/CD com GitHub Actions
