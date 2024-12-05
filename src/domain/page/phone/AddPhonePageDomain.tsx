import AddPhonePage from "../../../presentation/page/phone/AddPhonePage";
import { UseAlert } from "../../../presentation/hook/AlertHook";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { EndpointsConstant } from "../../../main/constant/EndpointConstant";
import MessageConstant from "../../../main/constant/MessageConstant";
import { PublicRoutesConstant } from "../../../main/constant/RouteConstant";
import { AddPhone, EditPhone } from "../../type/PhonePageType";
import { PhoneUseCase } from "../../../data/useCase/PhoneUseCase";

/**
 * AddPhonePageDomain
 * @constructor
 */
export const AddPhonePageDomain: React.FC = () => {
  const { showAlert } = UseAlert();
  const [model, setModel] = useState<null>(null);

  let navigate = useNavigate();
  const urlParams = useParams();

  const add = async (params: AddPhone) => {
    params.personId = Number(urlParams.idUser);
    await new PhoneUseCase(`${EndpointsConstant.phone}`)
      .Post({ data: params })
      .then((response) => {
        console.info("RESPONSE: ", response);
        showAlert({
          show: true,
          content: MessageConstant.sucesso.criar,
          color: "success",
          time: 2000,
        });
      })
      .catch((error) => {
        console.error("ERRO: ", error);
        showAlert({
          show: true,
          content: MessageConstant.erro.generico,
          color: "danger",
          time: 2000,
        });
      });
  };

  const edit = async (params: EditPhone) => {
    await new PhoneUseCase(`${EndpointsConstant.phone}`)
      .Put({ data: params })
      .then((response) => {
        console.info("RESPONSE: ", response);
        showAlert({
          show: true,
          content: MessageConstant.sucesso.atualizar,
          color: "success",
          time: 2000,
        });
      })
      .catch((error) => {
        console.error("ERRO: ", error);
        showAlert({
          show: true,
          content: MessageConstant.erro.generico,
          color: "danger",
          time: 2000,
        });
      });
  };

  const comeBack = () => {
    navigate(PublicRoutesConstant.PEOPLE_LIST);
  };

  const getModel = async (id: number) => {
    await new PhoneUseCase(`${EndpointsConstant.phone}/${id}`)
      .Get()
      .then((response) => {
        setModel(response.body);
      })
      .catch((error) => {
        console.error("ERRO: ", error);
        showAlert({
          show: true,
          content: MessageConstant.erro.naoEncontrado,
          color: "danger",
          time: 2000,
        });
      });
  };

  const init = async () => {
    if (urlParams.id) {
      await getModel(Number(urlParams.id));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AddPhonePage add={add} edit={edit} model={model} comeBack={comeBack} />
  );
};
