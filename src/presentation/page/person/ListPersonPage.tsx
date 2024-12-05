import AlertComponent from "../../component/alert/AlertComponent";
import { FaPlus } from "react-icons/fa";
import { FormatDate } from "../../../main/helper/dateFormatter";
import { PropsListPersonPage } from "../../../domain/type/PersonPageType";
import { ListPersonPageStyled } from "./ListPersonPageStyled";
import { Badge } from "react-bootstrap";
import TopLeftLogo from "../../component/logo/TopLeftLogo";

const ListPersonPage: React.FC<PropsListPersonPage> = ({
  list,
  add,
  edit,
}: PropsListPersonPage) => {
  return (
    <>
      <AlertComponent />
      <TopLeftLogo />
      <ListPersonPageStyled>
        <div className="title-page">
          <h3>Pessoa</h3>
        </div>
        <div className="filter-section">
          <button className="btn-add" onClick={add}>
            <FaPlus />
            <span>Novo</span>
          </button>
        </div>
        <div className="table-container">
          <div className="card">
            <div className="card-header">Lista de Pessoas</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Data de Nascimento</th>
                    <th>Telefones</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item: any) => (
                    <tr key={item.id} onClick={() => edit(item.id)}>
                      <td>{item.nome}</td>
                      <td>{item.cpf}</td>
                      <td>
                        {FormatDate.formatToBrazilianDate(item.dataNascimento)}
                      </td>
                      <td>
                        {item.telefones !== null &&
                          item.telefones.map((telefone: string) => (
                            <Badge
                              style={{ marginRight: "2px" }}
                              key={telefone}
                              bg="secondary"
                            >
                              {telefone}
                            </Badge>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ListPersonPageStyled>
    </>
  );
};

export default ListPersonPage;
