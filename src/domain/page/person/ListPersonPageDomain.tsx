import ListPersonPage from "../../../presentation/page/person/ListPersonPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PublicRoutesConstant } from "../../../main/constant/RouteConstant";
import { UseLoader } from "../../../presentation/hook/LoaderHook";
import { PersonUseCase } from "../../../data/useCase/PersonUseCase";
import { EndpointsConstant } from "../../../main/constant/EndpointConstant";
import MessageConstant from "../../../main/constant/MessageConstant";
import { UseAlert } from "../../../presentation/hook/AlertHook";

/**
 * ListPersonPageDomain
 * @constructor
 */
export const ListPersonPageDomain: React.FC = () => {
  let navigate = useNavigate();
  const { setLoad } = UseLoader();
  const { showAlert } = UseAlert();

  const [list, setList] = useState<[]>([]);

  const add = () => {
    navigate(PublicRoutesConstant.PEOPLE_ADD);
  };

  const edit = (id: number) => {
    navigate(`${PublicRoutesConstant.PEOPLE_ADD}/${id}`);
  };

  const getList = async () => {
    setLoad(true);

    await new PersonUseCase(`${EndpointsConstant.person}`)
      .Get()
      .then((response: any) => {
        setList(response.body);
      })
      .catch((error) => {
        showAlert({
          show: true,
          content: MessageConstant.erro.generico,
          color: "danger",
          time: 2000,
        });
        console.error("ERRO: ", error);
      });
    setLoad(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return <ListPersonPage add={add} list={list} edit={edit} />;
};
