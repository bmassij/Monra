import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    // Gebruik Resend voor e-mail (voeg RESEND_API_KEY toe in Vercel env vars)
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'website@monra-security.nl',
    //   to: 'info@monra-security.nl',
    //   subject: `Nieuw contactformulier van ${name}`,
    //   html: `<p><b>Naam:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Tel:</b> ${phone}</p><p><b>Bericht:</b> ${message}</p>`,
    // })

    console.log('Contact form submission:', { name, email, phone, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Er ging iets mis' }, { status: 500 })
  }
}
