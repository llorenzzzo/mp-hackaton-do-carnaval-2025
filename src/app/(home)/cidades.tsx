import { City, CityIcon } from "@/components/city";
import { Building2 } from "lucide-react";

export function Cidades() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 mt-20">
      <h2 className="font-heading text-purple-950 text-3xl md:text-4xl text-center md:text-start">
        Veja também
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center mt-6 gap-6">
        <City cityUrl="São%20Paulo" city="São Paulo">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Rio%20de%20Janeiro" city="Rio de Janeiro">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Belo%20Horizonte" city="Belo Horizonte">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Salvador" city="Salvador">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Recife" city="Recife e Olinda">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Brasilia" city="Brasília">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Fortaleza" city="Fortaleza">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
        <City cityUrl="Porto%20Alegre" city="Porto Alegre">
          <CityIcon>
            <Building2 className="size-8" />
          </CityIcon>
        </City>
      </div>
    </div>
  );
}
