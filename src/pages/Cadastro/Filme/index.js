import React, { useEffect, useState } from "react";

import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

import useForm from "../../../utils/useForm";
import api from "../../../services/api";

import { Spinner } from "../../../components/Spinner";
import { TableStyle, Delete, Update, Loading } from "./styles";
import Alert from "../../../components/Alert";

export default function CadastroFilme() {
  const { handleChange, values, clearForm } = useForm({});
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ name }) => name);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function Categorias() {
      const response = await api.get("/filmes");
      if (response.data.error) {
        setError("Houve algum erro, por favor tente novamente.");
      } else {
        setCategorias(response.data);
      }
    }
    Categorias();
  }, [refresh]);

  return (
    <PageDefault>
      <h1>Cadastro de Música</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (categorias != "") {
            setError("");
            setSuccess("");
            setCategorias([]);
            const response = await api.post("/filmes", {
              categoriaName: values.categoriaName,
              titulo: values.titulo,
              url: values.url,
            });

            setSuccess("Filme inserido com sucesso!");
            if (response.data.error) {
              setError("Houve algum erro, por favor tente novamente.");
              setSuccess("");
            }

            setRefresh(refresh + 1);
            clearForm();
          } else {
            setError("É obrigatório preencher os campos.");
          }
        }}
      >
        <FormField
          label="Nome da Música:"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria da Música:"
          name="categoriaName"
          value={values.categoriaName}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      {categorias.length > 0 && (
        <>
          <br />
          <br />
          {error && <Alert type="danger">{error}</Alert>}
          {success && <Alert type="success">{success}</Alert>}

          <TableStyle>
            <h1>Músicas cadastradas</h1>
            <table>
              <th>Música</th>
              <th>URL</th>
              <th>Categoria</th>
              <th>Alterar</th>
              <th>Excluir</th>
              {categorias.map((categoriaAtual) =>
                categoriaAtual.filmes.map((atual) => (
                  <tr key={`${atual.titulo}`}>
                    <td>
                      <input
                        className="Titulo"
                        type="text"
                        defaultValue={atual.titulo}
                        name={atual.titulo}
                      />
                    </td>
                    <td>
                      <input
                        className="Url"
                        type="text"
                        defaultValue={atual.url}
                        name={atual.url}
                      />
                    </td>
                    <td>
                      <input
                        className="Titulo"
                        type="text"
                        defaultValue={categoriaAtual.name}
                        name={categoriaAtual.name}
                      />
                    </td>
                    <td>
                      <a>
                        <Update size="20" />
                      </a>
                    </td>
                    <td>
                      <a>
                        <Delete
                          size="20"
                          onClick={async function handleDelete() {
                            setError("");
                            setSuccess("");
                            const response = await api.delete(
                              `/filmes/${atual._id}`
                            );
                            setSuccess("Categoria removida com sucesso!");
                            if (response.data.error) {
                              setError(
                                "Houve algum erro, por favor tente novamente."
                              );
                              setSuccess("");
                            }

                            setRefresh(refresh + 1);
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </table>
            <br />
            <br />
          </TableStyle>
        </>
      )}
    </PageDefault>
  );
}
