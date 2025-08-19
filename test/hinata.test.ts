import { expect } from "vitest"

/**
 * Test for the Hinata empty project template
 */
it("hinata source should return placeholder data", async () => {
  const { default: hinataSource } = await import("../server/sources/hinata")

  const result = await hinataSource()

  expect(result).toHaveLength(1)
  expect(result[0]).toMatchObject({
    id: "hinata-placeholder",
    title: "Hinata 空项目模板",
    url: "https://example.com",
    extra: {
      info: "这是一个空的项目模板",
    },
  })
})
