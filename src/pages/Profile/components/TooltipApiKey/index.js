import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { API_PERSONAL_ACCESS_TOKENS_URL } from "../../../../shared/api/api";

export const TooltipApiKey = () => {
  const apiKeyTooltip = (
    <Tooltip id="tooltip-apikey">
      Чтобы получить API Key, перейдите на GitHub и создайте Personal Access
      Token с необходимыми разрешениями. (Кликните по иконке вопроса, чтобы
      скопировать ссылку)
    </Tooltip>
  );

  const handleCopy = () => {
    navigator.clipboard
      .writeText(API_PERSONAL_ACCESS_TOKENS_URL)
      .then(() => toast.success("Ссылка скопирована в буфер обмена"))
      .catch(() => toast.error("Не удалось скопировать ссылку в буфер обмена"));
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
