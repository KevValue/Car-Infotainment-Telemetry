import { NextRequest, NextResponse } from 'next/server'
import { WinstonLogger } from '@/src/core/adapters/WinstonLogger'
import { withRequestContext } from '@/src/core/middleware/request-context'

const logger = new WinstonLogger()

// middleware at request time
export const POST = withRequestContext(async (req: Request) => {
  const body = await req.json()
  logger.log(body.level, body.message, body.context)
  return Response.json({ ok: true })
})

// export async function POST(req: NextRequest) {
//   const body = await req.json()
//   const { level = 'info', message, context = {} } = body
//
//   logger.log(level, message, {
//     ...context,
//     path: req.nextUrl.pathname,
//   })
//
//   return NextResponse.json({ ok: true })
// }
