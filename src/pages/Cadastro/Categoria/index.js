import React, { useState, useEffect } from "react";

import PageDefault from "../../../components/PageDefault";
import Button from "../../../components/Button";

import FormField from "../../../components/FormField";

import api from "../../../services/api";
import useForm from "../../../utils/useForm";

import { Spinner } from "../../../components/Spinner";
import { TableStyle, Delete, Update } from "./styles";
import Alert from "../../../components/Alert";

export default function CadastroCategoria() {
  const valoresIniciais = {
    name: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function searchCategory() {
      const response = await api.get("/categorias");
      if (response.data.error) {
        setError("Houve algum erro, por favor tente novamente.");
      } else {
        setCategorias(response.data);
      }
    }
    searchCategory();
  }, [refresh]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form
        onSubmit={async function handleSubmit(e) {
          e.preventDefault();
          setError("");
          setSuccess("");
          setCategorias([]);
          const response = await api.post("/categorias", { name: values.name });

          setSuccess("Categoria inserida com sucesso!");
          if (response.data.error) {
            setError("Houve algum erro, por favor tente novamente.");
            setSuccess("");
          }

          setRefresh(refresh + 1);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria:"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <Spinner />}

      {categorias.length > 0 && (
        <>
          <br />
          <br />
          {error.length > 0 && <Alert type="danger">{error}</Alert>}
          {success.length > 0 && <Alert type="success">{success}</Alert>}
          <h1>Categorias cadastradas</h1>
          <TableStyle>
            <table>
              {categorias.map((categoriaAtual) => (
                <tr key={`${categoriaAtual.name}`}>
                  <td>
                    <input
                      className="Categoria"
                      type="text"
                      defaultValue={categoriaAtual.name}
                      name={categoriaAtual.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <a>
                      <Update size="20" onClick={function handleUpdate(e) {}} />
                    </a>
                  </td>
                  <td>
                    <a>
                      <Delete
                        onClick={async function handleDelete() {
                          setError("");
                          setSuccess("");
                          const response = await api.delete(
                            `/categorias/${categoriaAtual._id}`
                          );
                          setSuccess("Categoria inserida com sucesso!");
                          if (response.data.error) {
                            setError(
                              "Houve algum erro, por favor tente novamente."
                            );
                            setSuccess("");
                          }

                          setRefresh(refresh + 1);
                        }}
                        size="20"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </table>
            <br />
            <br />
          </TableStyle>
        </>
      )}
    </PageDefault>
  );
}
