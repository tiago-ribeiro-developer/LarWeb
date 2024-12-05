import AlertComponent from "../../component/alert/AlertComponent";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { PiIdentificationCard } from "react-icons/pi";
import { Controller, useForm } from "react-hook-form";
import { maskUtils } from "../../../main/helper/maskHelper";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { AddPersonPageStyled } from "../person/AddPersonPageStyled";
import {
  AddPhone,
  EditPhone,
  InputsPhone,
  PropsAddPhonePage,
} from "../../../domain/type/PhonePageType";
import { useEffect } from "react";
import MessageConstant from "../../../main/constant/MessageConstant";
import TopLeftLogo from "../../component/logo/TopLeftLogo";

const AddPhonePage: React.FC<PropsAddPhonePage> = ({
  add,
  edit,
  model,
  comeBack,
}: PropsAddPhonePage) => {
  /** useForm */
  const {
    getValues,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsPhone>();

  const handleAdd = async () => {
    const model: AddPhone = {
      personId: getValues("personId") ?? "",
      tipo: getValues("tipo") ?? "",
      numero: getValues("numero") ?? "",
    };

    await add(model);
  };

  const handleEdit = async () => {
    const model: EditPhone = {
      id: getValues("id") ?? "",
      tipo: getValues("tipo") ?? "",
      numero: getValues("numero") ?? "",
    };

    await edit(model);
  };

  const setModel = (model: any) => {
    if (model !== null) {
      setValue("id", model.id);
      setValue("tipo", model.tipo);
      setValue("numero", model.numero);
      setValue("personId", model.personId);
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
            {model ? `Editar Telefone` : "Adicionar Telefone"}
          </h3>
        </div>
        <div className="form-container">
          <Card className="form-card shadow-lg">
            <Card.Body>
              <Form onSubmit={handleSubmit(handleSubmitValidation)}>
                <div className="section mb-4">
                  <div className="section-header d-flex align-items-center mb-3">
                    <PiIdentificationCard className="icon text-primary me-2" />
                    <h6 className="text-primary fw-bold mb-0">Contato</h6>
                  </div>
                  <Row>
                    <Col sm={4} md={4} lg={4} className="mb-3">
                      <Form.Label>Tipo</Form.Label>
                      <Controller
                        name="tipo"
                        defaultValue={"CELULAR"}
                        control={control}
                        render={({ field }) => (
                          <Form.Select {...field}>
                            <option value="CELULAR">Celular</option>
                            <option value="RESIDENCIAL">Residencial</option>
                            <option value="RECADO">Recado</option>
                            <option value="FAX">Fax</option>
                          </Form.Select>
                        )}
                      />
                    </Col>
                    <Col sm={8} md={8} lg={8} className="mb-3">
                      <Form.Label>Numero</Form.Label>
                      <Controller
                        control={control}
                        name="numero"
                        rules={{
                          required: MessageConstant.validacao.campoObrigatorio,
                        }}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder="Celular"
                            onChange={(e) =>
                              field.onChange(maskUtils.celular(e.target.value))
                            }
                          />
                        )}
                      />
                      {errors.numero && (
                        <span className="text-danger">
                          {errors.numero.message}
                        </span>
                      )}
                    </Col>
                  </Row>
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

export default AddPhonePage;
