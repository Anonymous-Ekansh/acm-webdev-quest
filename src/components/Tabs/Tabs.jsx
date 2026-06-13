import { useState } from "react";
import "./Tabs.css";

export const Tabs = (props) => {
  const tabs = props.tabs;
  const defaultActiveId = props.defaultActiveId;

  const [selectedTab, setSelectedTab] = useState(
    defaultActiveId || tabs[0].id
  );

  const currentTab = tabs.find(function (tab) {
    return tab.id === selectedTab;
  });

  return (
    <div className="tabs-container">
      <div className="tabs-list" role="tablist">
        {tabs.map(function (tab) {
          const active = tab.id === selectedTab;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active ? "true" : "false"}
              className={active ? "tab-button tab-active" : "tab-button"}
              onClick={function () {
                setSelectedTab(tab.id);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="tab-panel" role="tabpanel">
        {currentTab.content}
      </div>
    </div>
  );
};