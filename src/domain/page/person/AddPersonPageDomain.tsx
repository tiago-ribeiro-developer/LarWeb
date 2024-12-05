import AddPersonPage from "../../../presentation/page/person/AddPersonPage";
import { UseAlert } from "../../../presentation/hook/AlertHook";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PublicRoutesConstant } from "../../../main/constant/RouteConstant";
import { AddPerson, EditPerson } from "../../type/PersonPageType";
import { PersonUseCase } from "../../../data/useCase/PersonUseCase";
import { EndpointsConstant } from "../../../main/constant/EndpointConstant";
import MessageConstant from "../../../main/constant/MessageConstant";
import { PhoneUseCase } from "../../../data/useCase/PhoneUseCase";

/**
 * AddPersonPageDomain
 * @constructor
 */
export const AddPersonPageDomain: React.FC = () => {
  const { showAlert } = UseAlert();
  const [model, setModel] = useState<null>(null);
  const [modelPhones, setModelPhones] = useState<[]>([]);

  let navigate = useNavigate();
  const urlParams = useParams();

  const add = async (params: AddPerson) => {
    await new PersonUseCase(`${EndpointsConstant.person}/`)
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

  const edit = async (params: EditPerson) => {
    await new PersonUseCase(`${EndpointsConstant.person}`)
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

  const remove = async () => {
    await new PersonUseCase(`${EndpointsConstant.person}/${urlParams.id}`)
      .Delete()
      .then(() => {})
      .catch((error) => {
        console.error("ERRO: ", error);
        showAlert({
          show: true,
          content: MessageConstant.erro.generico,
          color: "danger",
          time: 2000,
        });
      });

    comeBack();
  };

  const comeBack = () => {
    navigate(PublicRoutesConstant.PEOPLE_LIST);
  };

  const addPhone = () => {
    navigate(`${PublicRoutesConstant.PHONE_ADD}/${urlParams.id}`);
  };

  const editPhone = (idPhone: number) => {
    navigate(`${PublicRoutesConstant.PHONE_ADD}/${urlParams.id}/${idPhone}`);
  };

  const deletePhone = async (idPhone: number) => {
    await new PhoneUseCase(`${EndpointsConstant.phone}/${idPhone}`)
      .Delete()
      .then(() => {})
      .catch((error) => {
        console.error("ERRO: ", error);
        showAlert({
          show: true,
          content: MessageConstant.erro.generico,
          color: "danger",
          time: 2000,
        });
      });

    await getPhonesByUser(Number(urlParams.id));
  };

  const getModel = async (id: number) => {
    await new PersonUseCase(`${EndpointsConstant.person}/${id}`)
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

  const getPhonesByUser = async (idUser: number) => {
    await new PhoneUseCase(`${EndpointsConstant.phone}/all/${idUser}`)
      .Get()
      .then((response) => {
        setModelPhones(response.body);
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

  const init = async () => {
    if (urlParams.id) {
      await getModel(Number(urlParams.id));
      await getPhonesByUser(Number(urlParams.id));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AddPersonPage
      add={add}
      edit={edit}
      remove={remove}
      model={model}
      comeBack={comeBack}
      phones={modelPhones}
      addPhone={addPhone}
      editPhone={editPhone}
      deletePhone={deletePhone}
    />
  );
};
