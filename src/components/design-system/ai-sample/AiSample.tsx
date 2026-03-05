import clsx from "clsx";

interface AiSampleProps {
  className?: string;
}

const executionLogs = [
  "Read: 组件规范与模板文件",
  "Read: archive/database.components",
  "tool_call: read/write",
  "shell: npm run build",
  "subagent: ui-polish",
  "深度思考 15.8s",
];

const featureItems = [
  {
    title: "支持工具调用",
    detail: "让 AI 成为真正能干活的助手，整理知识库、生成组件、创建文章、总结历史内容都不在话下。",
  },
  {
    title: "适配 SKILL",
    detail: "支持接入第三方 SKILL，能力可以无限扩展，满足不同场景需求，比如创建 PPT、创建数据库、创建 canvas 等。",
  },
  {
    title: "多模型切换",
    detail: "可接入你喜欢的模型，兼容 OpenAI, Gemini, Claude, 智谱, Deepseek 等海量模型。",
  },
  {
    title: "视觉接入",
    detail: "支持接入视觉能力，能够自动识别图像内容，扩展 AI 的感知能力。",
  },
];

export default function AiSample({ className }: AiSampleProps) {
  return (
    <div className={clsx("cp-ai-sample", className)}>
      <div className="cp-ai-chat">
        <div className="cp-ai-chat-header">
          <p className="cp-ai-chat-title">创建图润像素风格时钟组件</p>
          <span className="cp-ai-chat-token">20.9K tokens</span>
        </div>

        <div className="cp-ai-chat-bubble" data-role="user">
          <p className="cp-ai-chat-time">13:09</p>
          <p className="cp-ai-chat-line">创建一个像素风时钟组件，可以显示当前时间。</p>
          <ul>
            <li>第一行标题显示时分秒</li>
            <li>第二行标题显示年月日</li>
            <li>点击年月日跳转到当日日记</li>
            <li>简洁设计，避免过多装饰</li>
          </ul>
          <div className="cp-ai-chat-files">
            <span>database</span>
            <span>自定义组件规范-prompt.md</span>
          </div>
        </div>

        <div className="cp-ai-chat-logs">
          {executionLogs.map((item) => (
            <p key={item}>
              <span />
              {item}
            </p>
          ))}
        </div>

        <div className="cp-ai-chat-bubble">
          <p>需求确认</p>
          <ul>
            <li>两行标题：时分秒 / 年月日</li>
            <li>交互：点击日期跳转当日日记</li>
            <li>风格：像素风、简洁、可执行</li>
          </ul>
        </div>

        <div className="cp-ai-chat-input">
          <div className="cp-ai-chat-input-field">Ask anything...</div>
          <div className="cp-ai-chat-input-toolbar">
            <button type="button" className="cp-ai-chat-chip cp-ai-chat-chip--primary">
              glm-4.7
            </button>
            <button type="button" className="cp-ai-chat-chip">
              Thinking
            </button>
            <button type="button" className="cp-ai-chat-chip">
              Extensions
            </button>
          </div>
        </div>
      </div>

      <div className="cp-ai-feature">
          {featureItems.map((item, index) => (
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
