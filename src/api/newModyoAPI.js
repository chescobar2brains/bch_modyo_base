import ModyoSDK from "./ModyoClient"

const API = (space, type) => {
    const content = ModyoSDK.getContentType(space, type);

    const posts = {
        get() {
            return content.getEntries();
        },
        getByID(id) {
            return content.getEntry(id)
        },
        getTop(number) {
            const filter = content.Filter().Pagination(1, number);
            return content.getEntries(filter);
        },
        getPrivate() {
            return privateContent.getEntries();
        },
        getPrivateTop(number) {
            const filter = content.Filter().Pagination(1, number);
            return privateContent.getEntries(filter);
        },
        getEntry(id) {
            return privateContent.getEntry(id);
        },

        //obtiene la primera entrada (mas nueva)
        getFirstEntry() {
            const filter = content.Filter().SortBy("meta.created_at", "desc").Pagination(1, 1);
            return content.getEntries(filter);
        },
        //obtiene la primera entrada (mas vieja)
        getLastEntry() {
            const filter = content.Filter().SortBy("meta.created_at", "asc").Pagination(1, 1)
            return content.getEntries(filter);
        },
        //obtiene entradas filtradas por ruta de categorias
        getByCategory(category) {
            const filter = content.Filter().In("meta.category", [category])
            return content.getEntries(filter);
        },
        getByTag(tag) {
            const filter = content.Filter().In("meta.tags", [tag])
            return content.getEntries(filter);
        }
    }

    return posts
}

export default API
