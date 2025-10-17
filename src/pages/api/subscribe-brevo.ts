import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name } = req.body

  if (!email || !name) {
    return res.status(400).json({ error: 'Email e nome são obrigatórios' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const BREVO_LIST_ID = process.env.BREVO_LIST_ID

  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    return res.status(500).json({ error: 'Configuração do Brevo incompleta' })
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NOME: name,
          FIRSTNAME: name.split(' ')[0],
          LASTNAME: name.split(' ').slice(1).join(' ') || ''
        },
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true
      })
    })

    const data = await response.json()

    if (!response.ok) {
      // Se o contato já existe, Brevo retorna erro 400
      if (data.code === 'duplicate_parameter') {
        return res.status(200).json({ message: 'Email já cadastrado' })
      }
      throw new Error(data.message || 'Erro ao cadastrar no Brevo')
    }

    return res.status(200).json({ message: 'Cadastro realizado com sucesso!' })
  } catch (error) {
    console.error('Brevo error:', error)
    return res.status(500).json({
      error:
        error instanceof Error ? error.message : 'Erro ao processar cadastro'
    })
  }
}
