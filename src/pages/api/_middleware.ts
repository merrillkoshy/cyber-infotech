import { NextRequest, NextResponse } from "next/server"

export default function initMiddleware(middleware: Function) {
	return (req: any, res: any) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result: any) => {
				if (result instanceof Error) {
					return reject(result)
				}
				return resolve(result)
			})
		})
}
