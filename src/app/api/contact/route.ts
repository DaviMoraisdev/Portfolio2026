import { NextResponse } from 'next/server';
import { profile } from '@/data/portfolio';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = asCleanString(body.name);
    const email = asCleanString(body.email);
    const message = asCleanString(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 80 || message.length < 10 || message.length > 1200) {
      return NextResponse.json(
        { error: 'Revise o tamanho dos campos antes de enviar' },
        { status: 400 }
      );
    }

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;

    if (!endpoint) {
      return NextResponse.json(
        {
          error:
            'Formulario ainda nao configurado no servidor. Defina CONTACT_FORM_ENDPOINT ou use o e-mail direto.',
          fallbackEmail: profile.email,
        },
        { status: 503 }
      );
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: profile.portfolioUrl,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Servico de contato indisponivel no momento' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro interno no formulario de contato", error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a requisição' },
      { status: 500 }
    );
  }
}
