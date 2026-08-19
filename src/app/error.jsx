'use client'

import FigureError from "@/components/figureError";
export default function Error() {
    return (
        <>
            <div className="container-notfound">
                <div className="flex-notfound">
                    <h2>Erro</h2>
                    <p>Ocorreu um erro inesperado</p>
                    <FigureError/>
                </div>
            </div>
        </>
    )
}
