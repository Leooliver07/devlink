import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <h1 className=" select-none font-medium text-4xl mb-10 mt-10 px-10">Página nao encontrada</h1>
            <Link
            className="text-white bg-blue-700 rounded-md py-1 px-4 ml-5 transition-transform hover:scale-105 "
            to="/">Voltar a homepage</Link>
        </div>
    )
}