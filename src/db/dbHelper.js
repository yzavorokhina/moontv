import streams from './streams.json' with { type: 'json' };
import channels from './channels.json' with { type: 'json' };
import categories from './categories.json' with { type: 'json' };
import tags from './tags.json' with { type: 'json' };

class DBHelper {
    data = [];

    constructor(data) {
        this.data = data;
    }

    getAll() {
        return [...this.data];
    }

    findMany(func) {
        return [...this.data.filter(func)];
    }

    findOneById(id) {
        return this.data.find(record => record.id === id);
    }

    findByIds(ids) {
        if (!ids || !Array.isArray(ids)) {
            return [];
        }
        return [...this.data.filter(record => ids.indexOf(record.id) > -1)];
    }

    findByName(name, value) {
        return [...this.data.filter(record => record[name] === value)];
    }

    findByNameRegex(name, searchTerm) {
        return [...this.data.filter((record) => {
            const regex = new RegExp(`${searchTerm}`, 'giu', 'u')
            const result = record[name].match(regex);
            if (result) {
                console.log({ searchTerm, name, regex, result })
            }
            return result;
        })];
    }
}

const streamsModel = new DBHelper(streams.streams);
const channelsModel = new DBHelper(channels.channels);
const categoriesModel = new DBHelper(categories.categories);
const tagsModel = new DBHelper(tags.tags);
const db = {
    streamsModel,
    channelsModel,
    categoriesModel,
    tagsModel
};

export default db;