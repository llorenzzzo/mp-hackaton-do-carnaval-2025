import { Cidades } from "@/app/(home)/cidades";
import { Bloquinho } from "@/components/bloquinho";
import { Footer } from "@/components/footer";
import { IconButton } from "@/components/iconButton";
import { Input, InputIcon, InputRoot } from "@/components/input";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ListFilter,
  MapPinned,
  Search,
} from "lucide-react";

interface BloquinhoProps {
  title: string;
  date_time: string;
  neighborhood: string;
  price: string;
  id: string;
}

interface PageProps {
  params: Promise<{
    cityUrl: string;
  }>;
}

export default async function Bloco(props: PageProps) {
  const cityUrl = (await props.params).cityUrl;

  const response = await fetch(
    `https://apis.codante.io/api/bloquinhos2025/agenda?city=${cityUrl}`
  );
  const blocos = await response.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`w-full h-[87vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center`}
      >
        <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
          Blocos em
        </h1>
      </div>
      <div className="w-full max-w-[1240px] flex flex-col items-center justify-center">
        <div className="w-full flex justify-center md:justify-between mt-21 flex-wrap gap-3">
          <div className="w-full flex flex-row flex-wrap gap-3 justify-start">
            <InputRoot>
              <InputIcon>
                <Search />
              </InputIcon>
              <Input
                type="text"
                name="data"
                id="select-data"
                placeholder="Busque por blocos na cidade escolhida"
              ></Input>
            </InputRoot>
            <Select>
              <SelectIcon>
                <Calendar />
              </SelectIcon>
              <SelectInput>
                <option defaultValue="true">Selecione a data</option>
              </SelectInput>
            </Select>
            <Select>
              <SelectIcon>
                <MapPinned />
              </SelectIcon>
              <SelectInput>
                <option defaultValue="true">Filtrar por bairro</option>
              </SelectInput>
            </Select>
            <Select>
              <SelectIcon>
                <ListFilter />
              </SelectIcon>
              <SelectInput>
                <option defaultValue="true">Ordenar por</option>
                <option>Mais longe primeiro</option>
                <option>Mais próximos primeiro</option>
              </SelectInput>
            </Select>
          </div>
          <div className="w-full max-w-[1240px] items-center justify-center flex flex-row flex-wrap mt-6 gap-6 ">
            {blocos.data.map((bloquinho: BloquinhoProps) => (
              <Bloquinho
                key={bloquinho.id}
                title={bloquinho.title}
                date={bloquinho.date_time}
                neighborhood={bloquinho.neighborhood}
                price={bloquinho.price}
                id={bloquinho.id}
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-center gap-4 mt-16">
            <IconButton>
              <ArrowLeft />
            </IconButton>
            <IconButton>
              <ArrowRight />
            </IconButton>
          </div>
        </div>
        <Cidades />
      </div>
      <Footer />
    </div>
  );
}
