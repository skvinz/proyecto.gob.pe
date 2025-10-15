import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Search, Printer, Share2, Bookmark, Download, Facebook, Twitter, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#b12025] rounded-full flex items-center justify-center relative">
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-[#b12025]">gob.pe</span>
          </a>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar en INACAL"
                className="pr-12 h-10 md:h-12 border-gray-300 rounded text-sm md:text-base"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-10 md:h-12 w-10 md:w-12 bg-[#272f31] hover:bg-[#3a4245] rounded-l-none"
              >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList className="text-xs md:text-sm flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                  El Estado
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                  PRODUCE
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                  INACAL
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                  Informes y publicaciones
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <span className="text-gray-600">166. SR PROYECTOS & CONSTRUCCIONES S.A.C.</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-[#fbfbfb]">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* Institution Name */}
          <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-base md:text-lg inline-block mb-3 md:mb-4">
            Instituto Nacional de Calidad
          </a>

          {/* Title and Actions */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6 gap-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              166. SR PROYECTOS & CONSTRUCCIONES S.A.C.
            </h1>

            <div className="flex gap-4 md:gap-6 md:ml-8">
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                <Printer className="h-5 w-5 md:h-6 md:w-6" />
                <span className="text-xs md:text-sm">Imprimir</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="h-5 w-5 md:h-6 md:w-6" />
                <span className="text-xs md:text-sm">Compartir</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark className="h-5 w-5 md:h-6 md:w-6" />
                <span className="text-xs md:text-sm">Guardar</span>
              </button>
            </div>
          </div>

          {/* File Type Badge */}
          <div className="mb-3 md:mb-4">
            <span className="text-gray-600 font-medium text-sm md:text-base">Archivo</span>
          </div>

          {/* Date */}
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">16 de junio de 2025</p>

          {/* Description */}
          <div className="mb-6 md:mb-8">
            <p className="text-gray-900 mb-2 text-sm md:text-base">166. SR PROYECTOS & CONSTRUCCIONES S.A.C.</p>
            <p className="text-gray-600 text-sm md:text-base">
              Esta publicación pertenece al compendio{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                Lab. Ensayo - Alcances por Empresa
              </a>
            </p>
          </div>

          {/* Document Card */}
          <Card className="max-w-sm bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 md:p-6">
              <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
                {/* Document Thumbnail */}
                <div className="w-20 h-28 md:w-24 md:h-32 border border-gray-300 bg-gray-100 flex-shrink-0 relative overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/1487289080/1324530438.jpeg"
                    alt="Document preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Document Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                    2. TECNOVIAS - Act. forma - Alcance (2025-06-13)
                  </h3>
                  <div className="text-xs md:text-sm text-gray-600 space-y-1">
                    <p>PDF</p>
                    <p>139.5 KB</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <Button className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-colors text-sm md:text-base">
                <Download className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Descargar
              </Button>
            </div>
          </Card>

          <Separator className="my-8 md:my-12" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#272f31] text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t-[6px] md:border-t-8 border-t-[#9c7c6c]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Left Column */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Sobre el Estado Peruano</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    El Estado Peruano
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    ¿Qué es Gob.pe?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    Política de privacidad para el manejo de datos en Gob.pe
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Directorios nacionales</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    Directorio Nacional de Funcionarios Públicos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    Directorio Nacional de Redes Sociales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    Directorio de Establecimientos de Salud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white underline text-sm md:text-base transition-colors">
                    Directorio Nacional de Aeropuertos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Síguenos</h3>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-[#3b5998] rounded-full flex items-center justify-center hover:bg-[#4c6aac] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Border Pattern */}
        <div className="h-1.5 md:h-2 bg-gradient-to-r from-[#9c7c6c] via-[#c4c1b1] to-[#9c7c6c] opacity-40" />
      </footer>
    </div>
  );
}
