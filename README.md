# 家居装饰风格测试与灵感收集平台

## 启动方式

```bash
cd frontend
npm install
npm run dev
```

访问地址：http://localhost:18806

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 前端 | Vue 3、TypeScript、Vite |
| UI | Tailwind CSS |
| 图表 | ECharts |
| 拖拽 | vue-draggable-plus |
| 状态 | Pinia |
| 本地存储 | Dexie.js / IndexedDB |
| 路由 | Vue Router 4 |

## 目录结构

```text
frontend/src/
  api/ stores/ types/ components/common/ hooks/ pages/ router/ utils/ constants/ styles/
```

## 枚举位置

- 装修风格与房间类型：`frontend/src/types/enums.ts`
- 风格颜色常量：`frontend/src/constants/styleColors.ts`

## License

MIT
