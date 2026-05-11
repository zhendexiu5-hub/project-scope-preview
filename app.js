const form = document.querySelector("#project-form");
const projectType = document.querySelector("#project-type");
const stage = document.querySelector("#stage");
const audience = document.querySelector("#audience");
const goal = document.querySelector("#goal");
const planStatus = document.querySelector("#plan-status");
const mockStage = document.querySelector("#mock-stage");
const mockGoal = document.querySelector("#mock-goal");
const planList = document.querySelector("#plan-list");
const gate = document.querySelector("#gate");
const dialog = document.querySelector("#decision-dialog");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCopy = document.querySelector("#dialog-copy");
const selfBuild = document.querySelector("#self-build");
const contactService = document.querySelector("#contact-service");

const planByType = {
  "AI 工具 / 自动化系统": ["MVP 先验证输入、处理、输出三段闭环。", "优先制作一个可演示工作台，让用户看到自动化结果。", "完整模型调度、私有规则库和异常恢复保留到服务阶段。"],
  "SaaS 平台": ["MVP 先做账户、核心对象、关键流程和基础看板。", "优先展示用户从创建到获得结果的端到端体验。", "订阅、权限、数据隔离和生产运维保留到服务阶段。"],
  "企业内部管理工具": ["MVP 先梳理角色、流程节点、审批状态和报表。", "优先做一个可供内部评审的业务操作界面。", "系统集成、权限矩阵和迁移方案保留到服务阶段。"],
  "内容 / 营销型网站": ["MVP 先明确受众、转化路径、内容模块和表单收集。", "优先展示首屏、案例页和联系入口的可视化效果。", "增长追踪、内容策略和投放落地保留到服务阶段。"]
};

function generatePlan(event) {
  event.preventDefault();

  const selectedType = projectType.value;
  const selectedStage = stage.value;
  const selectedAudience = audience.value.trim() || "目标用户";
  const selectedGoal = goal.value.trim() || "验证项目价值";
  const typePlan = planByType[selectedType] || planByType["AI 工具 / 自动化系统"];

  planStatus.textContent = "已生成基础方案";
  mockStage.textContent = selectedStage.replace("，", " / ");
  mockGoal.textContent = selectedGoal;

  planList.innerHTML = "";
  [
    `目标用户：${selectedAudience}。`,
    `主要目标：${selectedGoal}。`,
    ...typePlan,
    "下一步可申请免费项目进程诊断；诊断免费，具体解决方案和实施交付收费。"
  ].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    planList.appendChild(li);
  });

  gate.hidden = false;
}

function showSelfBuild() {
  dialogKicker.textContent = "自主推进";
  dialogTitle.textContent = "你可以继续自行开发";
  dialogCopy.textContent =
    "公开 demo 只覆盖基础雏形和简短方案。若自主开发，后续复杂度、部署稳定性、错误定位、规则维护和项目进程管理将由你自行承担。后续遇到卡点时，仍可提交进程信息申请免费诊断；具体修复和实施方案收费。";
  dialog.showModal();
}

function showContact() {
  dialogKicker.textContent = "免费诊断";
  dialogTitle.textContent = "申请项目进程诊断";
  dialogCopy.textContent =
    "提交当前项目阶段、仓库或截图后，可获得一次免费诊断。诊断用于定位问题；详细方案、修复实施、部署上线、生产保障和长期维护作为付费服务交付。";
  dialog.showModal();
}

form.addEventListener("submit", generatePlan);
selfBuild.addEventListener("click", showSelfBuild);
contactService.addEventListener("click", showContact);
