import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "../kibo-ui/tags";

export interface ModalRevenueProps {
  type?: "insert" | "altered";
  data?: {
    id?: number | null;
    value?: number | null;
    description?: string | null;
    date?: Date | null;
    received?: boolean | null;
    category?: number[] | null;
    accountReceived?: number | null;
    origin?: string | null;
    observation?: string | null;
  };
  onClose?: () => void;
}

const exempleTagsCategory = [
  { id: "1", label: "Geral" },
  { id: "2", label: "Transporte" },
  { id: "3", label: "Alimentação" },
  { id: "4", label: "Viagem" },
];

export default function ModalRevenue({
  type = "insert",
  data,
  onClose,
}: ModalRevenueProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTags, setNewTags] = useState<string>("");
  const [tags, setTags] =
    useState<{ id: string; label: string }[]>(exempleTagsCategory);

  const handleRemove = (value: string) => {
    if (!selectedTags.includes(value)) {
      return;
    }
    console.log(`removed: ${value}`);
    setSelectedTags((prev) => prev.filter((v) => v !== value));
  };

  const handleSelect = (value: string) => {
    if (selectedTags.includes(value)) {
      handleRemove(value);
      return;
    }
    console.log(`selected: ${value}`);
    setSelectedTags((prev) => [...prev, value]);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {type === "insert" ? "Inserir Receita" : "Alterar Receita"}
          </DialogTitle>
          <DialogDescription>
            Preencha os dados da receita abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full max-w-md">
          <form>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="decriptionRevenue">Descrição</FieldLabel>
                  <Input
                    id="descriptionRevenue"
                    type="text"
                    placeholder="Descrição"
                  />

                  <Tags className="max-w-[150px]">
                    <TagsTrigger>
                      {selectedTags.map((tag) => (
                        <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
                          {tags.find((t) => t.id === tag)?.label}
                        </TagsValue>
                      ))}
                    </TagsTrigger>
                    <TagsContent>
                      <TagsInput
                        onValueChange={setNewTags}
                        placeholder="Selecione a Categoria"
                      />
                      <TagsList>
                        <TagsEmpty />
                        <TagsGroup>
                          {tags
                            .filter((tag) => !selectedTags.includes(tag.id))
                            .map((tag) => (
                              <TagsItem
                                key={tag.id}
                                onSelect={handleSelect}
                                value={tag.id}
                              >
                                {tag.label}
                              </TagsItem>
                            ))}
                        </TagsGroup>
                      </TagsList>
                    </TagsContent>
                  </Tags>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>

        <DialogFooter>
          <Button>Salvar</Button>
          <Button onClick={onClose} variant="destructive">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
