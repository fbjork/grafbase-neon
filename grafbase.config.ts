import { config, connector, g } from "@grafbase/sdk"

const pg = connector.Postgres("pg", {
	url: g.env("DATABASE_URL"),
})

g.datasource(pg)

g.query("hello", {
	args: { name: g.string().optional() },
	returns: g.string(),
	resolver: "hello",
})

export default config({
	schema: g,
})
