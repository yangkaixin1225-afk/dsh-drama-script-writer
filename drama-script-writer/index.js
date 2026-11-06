import { readFile } from 'node:fs/promises'

const skillUrl = new URL('./SKILL.md', import.meta.url)
const description = '从点子、大纲或旧稿出发，写出可继续制作的短剧与漫剧剧本。用于分集大纲、场景正文、续写和局部改稿。'
const invocation = { modelInvocable: true, userInvocable: true }

export const name = 'drama-script-writer'
export const inject = ['skills']

export function apply(ctx) {
  ctx.skills.registerProvider(() => ({
    name,
    async list() {
      return [{
        name,
        description,
        invocation,
        provider: name,
        source: 'bundled',
        rank: 600,
        locator: skillUrl,
      }]
    },
    async get() {
      return {
        name,
        description,
        invocation,
        provider: name,
        source: 'bundled',
        content: await readFile(skillUrl, 'utf8'),
      }
    },
  }))
}
