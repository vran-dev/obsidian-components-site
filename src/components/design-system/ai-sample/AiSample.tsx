import clsx from "clsx";
import { useCopy } from "../../../i18n";

interface AiSampleProps {
  className?: string;
}

export default function AiSample({ className }: AiSampleProps) {
  const copy = useCopy();
  const { aiSample } = copy.home;

  return (
    <div className={clsx("cp-ai-sample", className)}>
      <div className="cp-ai-chat">
        <div className="cp-ai-chat-header">
          <p className="cp-ai-chat-title">{aiSample.chat.title}</p>
          <span className="cp-ai-chat-token">{aiSample.chat.tokenLabel}</span>
        </div>

        <div className="cp-ai-chat-bubble" data-role="user">
          <p className="cp-ai-chat-time">{aiSample.chat.timeLabel}</p>
          <p className="cp-ai-chat-line">{aiSample.chat.message}</p>
          <ul>
            {aiSample.chat.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
          <div className="cp-ai-chat-files">
            {aiSample.chat.attachments.map((attachment) => (
              <span key={attachment}>{attachment}</span>
            ))}
          </div>
        </div>

        <div className="cp-ai-chat-logs">
          {aiSample.executionLogs.map((item) => (
            <p key={item}>
              <span />
              {item}
            </p>
          ))}
        </div>

        <div className="cp-ai-chat-bubble">
          <p>{aiSample.chat.confirmationTitle}</p>
          <ul>
            {aiSample.chat.confirmations.map((confirmation) => (
              <li key={confirmation}>{confirmation}</li>
            ))}
          </ul>
        </div>

        <div className="cp-ai-chat-input">
          <div className="cp-ai-chat-input-field">{aiSample.chat.inputPlaceholder}</div>
          <div className="cp-ai-chat-input-toolbar">
            <button type="button" className="cp-ai-chat-chip cp-ai-chat-chip--primary">
              {aiSample.chat.toolbar.model}
            </button>
            <button type="button" className="cp-ai-chat-chip">
              {aiSample.chat.toolbar.thinking}
            </button>
            <button type="button" className="cp-ai-chat-chip">
              {aiSample.chat.toolbar.extensions}
            </button>
          </div>
        </div>
      </div>

      <div className="cp-ai-feature">
        {aiSample.featureItems.map((item, index) => (
          <article key={item.title} className="cp-ai-feature-card">
            <span className="cp-ai-feature-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{item.title}</p>
              <span>{item.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
