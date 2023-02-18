
const types = {
    ts: ['TypeScript', '#0076c6', '#fff'],
    docker: ['Docker', '#2592e5', '#222'],
    puppeteer: ['Puppeteer', '#02cd9a', '#222'],
    discord: ['Discord', '#5562eb', '#eee'],
    linux: ['Linux', '#e9ce46', '#222'],
    rust: ['Rust', '#ea4703', '#181818'],
    '3d': ['three.js', '#423f81', '#eee'],
    angular: ['Angular', '#bc032e', '#eee'],
    node: ['node.js', 'blue', '#eee'],
    vue: ['vue.js', '#32465b', '#5dc697'],
    firebase: ['firebase', '#ffcb35', '#474747'],
    pwa: ['Progressive Web App', '#550ec0', '#ddd'],
    sfml: ['SFML', '#6ba426', '#222'],
} satisfies { [key: string]: [string, string, string] }

export type TechnologyType = keyof typeof types

export const getTechnologyProps = (type: TechnologyType): typeof types[TechnologyType] => {
    return types[type] ?? [type, '#111', '#eee']
}