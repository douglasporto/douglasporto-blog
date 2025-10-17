import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success?: boolean
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { name, email, newsletter } = req.body

    // Validação
    if (!email || !name) {
      return res.status(400).json({
        error: 'Nome e email são obrigatórios'
      })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Email inválido'
      })
    }

    // Debug: verificar se as variáveis estão sendo carregadas
    console.log(
      'CONVERTKIT_API_KEY:',
      process.env.CONVERTKIT_API_KEY ? 'Presente' : 'AUSENTE'
    )
    console.log('CONVERTKIT_FORM_ID:', process.env.CONVERTKIT_FORM_ID)

    // Integração com ConvertKit - Adicionar subscriber diretamente
    const convertKitUrl = `https://api.convertkit.com/v3/subscribers?api_secret=${process.env.CONVERTKIT_API_KEY}`

    console.log('Tentando adicionar ao ConvertKit...', { email, name })

    const response = await fetch(convertKitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        first_name: name
      })
    })

    const responseData = await response.json()
    console.log('Resposta ConvertKit:', responseData)

    if (!response.ok) {
      console.error('Erro ConvertKit:', responseData)
      throw new Error('Erro ao cadastrar no ConvertKit')
    }

    // Log para debug
    console.log('Lead adicionado ao ConvertKit:', {
      name,
      email,
      newsletter,
      timestamp: new Date().toISOString()
    })

    return res.status(200).json({
      success: true,
      message: 'Email cadastrado com sucesso!'
    })
  } catch (error) {
    console.error('Erro na API de subscribe:', error)
    return res.status(500).json({
      error: 'Erro ao processar sua solicitação. Tente novamente.'
    })
  }
}
