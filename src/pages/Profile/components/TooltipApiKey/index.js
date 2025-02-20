import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";
import { toast } from "react-toastify";

export const TooltipApiKey = () => {
  const apiKeyTooltip = (
    <Tooltip id="tooltip-apikey">
      Чтобы получить API Key, перейдите на GitHub и создайте Personal Access
      Token с необходимыми разрешениями. (Кликните по иконке вопроса, чтобы скопировать ссылку)
    </Tooltip>
  );

  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://github.com/settings/personal-access-tokens")
      .then(() => {
        toast.success("Ссылка скопирована в буфер обмена");
      })
      .catch((err) => {
        toast.error("Не удалось скопировать ссылку в буфер обмена", err);
      });
  };

  return (
    <OverlayTrigger placement="right" overlay={apiKeyTooltip}>
      <QuestionCircle
        className="ms-1"
        style={{ cursor: "pointer" }}
        onClick={() => handleCopy()}
      />
    </OverlayTrigger>
  );
};
