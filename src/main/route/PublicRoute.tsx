import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutesConstant } from "../constant/RouteConstant";
import { ListPersonPageDomain } from "../../domain/page/person/ListPersonPageDomain";
import { AddPhonePageDomain } from "../../domain/page/phone/AddPhonePageDomain";
import { AddPersonPageDomain } from "../../domain/page/person/AddPersonPageDomain";

export function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PublicRoutesConstant.PEOPLE_LIST}
          element={<ListPersonPageDomain />}
        />
        <Route
          path={`${PublicRoutesConstant.PEOPLE_ADD}/:id?`}
          element={<AddPersonPageDomain />}
        />
        <Route
          path={`${PublicRoutesConstant.PHONE_ADD}/:idUser/:id?`}
          element={<AddPhonePageDomain />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoute;
