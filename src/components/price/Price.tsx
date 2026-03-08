import { BadgeDollarSign } from "lucide-react";
import DayCounter from "../DayCounter";
import TimelineModule from "../design-system/TimelineModule";
import { HOME_LINKS, HOME_PRICE } from "../../constants/home";
import "./Price.css";

export default function Price() {
  return (
    <TimelineModule
      id="price"
      icon={<BadgeDollarSign size={14} />}
      title="试用和买断"
      subtitle="先试用验证，再按需买断，把决策风险降到最低。"
    >
      <article className="cp-card cp-card--default cp-price-status-card">
        <DayCounter startDate="2024-01-17" label="Components 持续打磨中" />
        <div className="cp-price-meta-links">
          <a href={HOME_LINKS.agreement} target="_blank" rel="noreferrer" className="cp-price-meta-link">
            查看购买协议
          </a>
          <a href={HOME_LINKS.release} target="_blank" rel="noreferrer" className="cp-price-meta-link">
            最近更新日志
          </a>
        </div>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <article className="cp-card cp-card--default">
          <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">7 天全功能试用</h3>
          <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">0 元 / 人</p>
          <p className="text-sm text-[var(--cp-text-secondary)]">先验证是否解决你的核心问题，再决定是否买断。</p>
          <a
            href={HOME_LINKS.trial}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
          >
            免费开始
          </a>
        </article>

        <article className="cp-card cp-card--brand">
          <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">一次买断，长期可用</h3>
          <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">{HOME_PRICE} 元 / 人</p>
          <div className="cp-result-line">解决方案持续迭代，不再重复投入</div>
          <ul className="space-y-2 text-sm text-[var(--cp-text-secondary)]">
            <li>解锁全部组件与数据库能力</li>
            <li>可接入 AI 模型，支持全库协作</li>
            <li>会员群答疑与使用支持</li>
            <li>模板库持续扩展，开箱即用</li>
            <li>组件能力持续更新</li>
          </ul>
          <a
            href={HOME_LINKS.buyout}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
          >
            限时买断
          </a>
        </article>
      </div>
    </TimelineModule>
  );
}
