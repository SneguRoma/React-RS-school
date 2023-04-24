// vite.config.ts
import { defineConfig } from "file:///D:/rs_school/React/React.-RS-school/node_modules/vite/dist/node/index.js";
import react from "file:///D:/rs_school/React/React.-RS-school/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      enabled: true,
      provider: "c8",
      reporter: ["text"],
      all: true,
      exclude: [
        "**/interfaces.ts",
        "**/vite.config.ts",
        "**/.eslintrc.cjs",
        "**/.prettierrc.cjs",
        "**/index-cc771fc8.js",
        "**/vite-env.d.ts",
        "**/constants.ts",
        "**/dataTestJson.ts"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyc19zY2hvb2xcXFxcUmVhY3RcXFxcUmVhY3QuLVJTLXNjaG9vbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccnNfc2Nob29sXFxcXFJlYWN0XFxcXFJlYWN0Li1SUy1zY2hvb2xcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3JzX3NjaG9vbC9SZWFjdC9SZWFjdC4tUlMtc2Nob29sL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy9zZXR1cFRlc3RzLnRzJ10sXHJcbiAgICBjb3ZlcmFnZToge1xyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICBwcm92aWRlcjogJ2M4JyxcclxuICAgICAgcmVwb3J0ZXI6IFsndGV4dCddLFxyXG4gICAgICBhbGw6IHRydWUsXHJcbiAgICAgIGV4Y2x1ZGU6IFtcclxuICAgICAgICAnKiovaW50ZXJmYWNlcy50cycsXHJcbiAgICAgICAgJyoqL3ZpdGUuY29uZmlnLnRzJyxcclxuICAgICAgICAnKiovLmVzbGludHJjLmNqcycsXHJcbiAgICAgICAgJyoqLy5wcmV0dGllcnJjLmNqcycsXHJcbiAgICAgICAgJyoqL2luZGV4LWNjNzcxZmM4LmpzJyxcclxuICAgICAgICAnKiovdml0ZS1lbnYuZC50cycsXHJcbiAgICAgICAgJyoqL2NvbnN0YW50cy50cycsXHJcbiAgICAgICAgJyoqL2RhdGFUZXN0SnNvbi50cycsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsSUFDbEMsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLE1BQU07QUFBQSxNQUNqQixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
