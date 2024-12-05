import {
  AddPerson,
  EditPerson,
  InputsPerson,
  PropsAddPersonPage,
} from "../../../domain/type/PersonPageType";
import { Controller, useForm } from "react-hook-form";
import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import { maskUtils } from "../../../main/helper/maskHelper";
import { PiIdentificationCard } from "react-icons/pi";
import {
  FaArrowLeft,
  FaEdit,
  FaPlus,
  FaSave,
  FaTrashAlt,
} from "react-icons/fa";
import { AddPersonPageStyled } from "./AddPersonPageStyled";
import { FormatDate } from "../../../main/helper/dateFormatter";
import { useEffect } from "react";
import AlertComponent from "../../component/alert/AlertComponent";
import TopLeftLogo from "../../component/logo/TopLeftLogo";

const AddPersonPage: React.FC<PropsAddPersonPage> = ({
  add,
  edit,
  remove,
  model,
  comeBack,
  phones,
  addPhone,
  editPhone,
  deletePhone,
}: PropsAddPersonPage) => {
  /** useForm */
  const {
    register,
    getValues,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsPerson>();

  const handleAdd = async () => {
    const model: AddPerson = {
      nome: getValues("nome") ?? "",
      dataNascimento:
        FormatDate.formatForValidation(getValues("dataNascimento")) ?? "",
      cpf: getValues("cpf") ?? "",
    };

    await add(model);
  };

  const handleEdit = async () => {
    const model: EditPerson = {
      id: Number(getValues("id")),
      nome: getValues("nome") ?? "",
      dataNascimento:
        FormatDate.formatForValidation(getValues("dataNascimento")) ?? "",
      cpf: getValues("cpf") ?? "",
    };

    await edit(model);
  };

  const setModel = (model: any) => {
    if (model !== null) {
      setValue("id", model.id);
      setValue("nome", model.nome);
      setValue("cpf", model.cpf);
      setValue(
        "dataNascimento",
        FormatDate.formatToDateOnly(model.dataNascimento),
      );
    }
  };

  const handleSubmitValidation = async () => {
    model === null ? await handleAdd() : await handleEdit();
  };

  useEffect(() => {
    setModel(model);
  }, [model]);

  return (
    <>
      <AddPersonPageStyled>
        <AlertComponent />
        <TopLeftLogo />
        <div className="title-page text-center mb-4">
          <h3 className="text-primary fw-bold">
            {model ? `Editar Pessoa: ${model.nome}` : "Adicionar Nova Pessoa"}
          </h3>
        </div>
        <div className="form-container">
          <Card className="form-card shadow-lg">
            <Card.Body>
              <Form onSubmit={handleSubmit(handleSubmitValidation)}>
                <div className="section mb-4">
                  <div className="section-header d-flex align-items-center mb-3">
                    <PiIdentificationCard className="icon text-primary me-2" />
                    <h6 className="text-primary fw-bold mb-0">
                      Dados Pessoais
                    </h6>
                  </div>
                  <Row>
                    <Col sm={12} md={6} lg={4} className="mb-3">
                      <Form.Label className="fw-semibold">Nome</Form.Label>
                      <Form.Control
                        placeholder="Digite o nome completo"
                        {...register("nome", {
                          required: "O nome é obrigatório.",
                        })}
                        isInvalid={!!errors.nome}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nome?.message}
                      </Form.Control.Feedback>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-3">
                      <Form.Label className="fw-semibold">CPF</Form.Label>
                      <Controller
                        control={control}
                        name="cpf"
                        rules={{ required: "campo obrigatório" }}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder="Digite o CPF"
                            onChange={(e) =>
                              field.onChange(maskUtils.cpf(e.target.value))
                            }
                            isInvalid={!!errors.cpf}
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cpf?.message}
                      </Form.Control.Feedback>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-3">
                      <Form.Label className="fw-semibold">
                        Data de Nascimento
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Selecione a data de nascimento"
                        min="1900-01-01"
                        max="2100-12-31"
                        {...register("dataNascimento", {
                          required: "A data de nascimento é obrigatória.",
                        })}
                        isInvalid={!!errors.dataNascimento}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.dataNascimento?.message}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </div>
                <div className="section mb-4">
                  <div className="section-header d-flex align-items-center mb-3">
                    <PiIdentificationCard className="icon text-primary me-2" />
                    <h6 className="text-primary fw-bold mb-0">
                      Telefones para Contato
                    </h6>
                  </div>
                  <div className="mb-3">
                    <Row>
                      <Col>
                        {phones.map((item: any, index: number) => (
                          <div
                            key={index}
                            className="d-flex align-items-center justify-content-between border rounded p-2 mb-2"
                          >
                            <div>
                              <span className="fw-bold">{item.numero}</span>
                              {item.tipo && (
                                <span className="text-muted ms-2">
                                  ({item.tipo})
                                </span>
                              )}
                            </div>
                            <div>
                              <Button
                                size="sm"
                                variant="outline-secondary"
                                className="me-2"
                                onClick={() => editPhone(item.id)}
                              >
                                <FaEdit className="me-1" />
                                Editar
                              </Button>
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() => deletePhone(item.id)}
                              >
                                <FaTrashAlt className="me-1" />
                                Remover
                              </Button>
                            </div>
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </div>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    className="d-flex align-items-center"
                    onClick={addPhone}
                  >
                    <FaPlus className="me-2" />
                    Adicionar Telefone
                  </Button>
                </div>
                <div className="form-actions d-flex justify-content-between">
                  <Button
                    variant="outline-secondary"
                    onClick={comeBack}
                    className="d-flex align-items-center"
                  >
                    <FaArrowLeft className="me-2" />
                    Voltar
                  </Button>
                  <div className="d-flex gap-2">
                    {model && (
                      <Button
                        variant="danger"
                        className="d-flex align-items-center"
                        onClick={remove}
                      >
                        <FaTrashAlt className="me-2" />
                        Deletar
                      </Button>
                    )}
                    <Button
                      variant="success"
                      type="submit"
                      className="d-flex align-items-center"
                    >
                      <FaSave className="me-2" />
                      Salvar
                    </Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </AddPersonPageStyled>
    </>
  );
};

export default AddPersonPage;
