import React, { useEffect, useState } from "react";
import { ACTIONS_IMAGE_PATH } from "./../utils/constants";
import data from "./__mocks__/crmService";
import ActionCard from "../components/crm/ActionCard";
import SkeletonHomeScreen from "./SkeletonHomeScreen";

function HomeScreen(props) {
  const [loading, setLoading] = useState(false);
  const [actions, setActions] = useState([]);

  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

  useEffect(() => {
    setLoading(true);
    data
      .get()

      .then((res) => {
        setActions(res.actions);
      })
      .then(() => delay(2000))
      .then(() => setLoading(false));

    return () => {};
  }, []);
  return (
    <>
      {loading && <SkeletonHomeScreen />}
      {!loading && (
        <div className="homeMessage">
          Good morning Lisa, what would you like to do?
          <ul className="actions">
            {actions.map((action) => (
              <li key={action.id}>
                <ActionCard
                  description={action.description}
                  imagePath={ACTIONS_IMAGE_PATH + "/" + action.imagePath}
                  alt={action.alt}
                ></ActionCard>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default HomeScreen;
