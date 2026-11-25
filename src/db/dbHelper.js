import streams from './streams.json' with { type: 'json' };
import channels from './channels.json' with { type: 'json' };
import categories from './categories.json' with { type: 'json' };
import categoriesLocalization from './categoriesLocalization.json' with { type: 'json' };
import localization from './localization.json' with { type: 'json' };
import tags from './tags.json' with { type: 'json' };
import clips from './clips.json' with { type: 'json' };

class DBHelper {
    data = [];

    constructor(data) {
        this.data = data;
    }

    getAll() {
        return Array.isArray(this.data) ? [...this.data] : this.data;
    }

    getOneByName(name) {
        if (!this.data[name]) {
            return;
        }
        return this.data[name];
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

    findOneByNameAndId(name, id) {
        if (!this.data[name]) {
            return;
        }
        return this.data[name].find(record => record.id === id);
    }

    findManyByNameAndId(name, id) {
        if (!this.data[name]) {
            return [];
        }
        return [...this.data[name].filter(record => record.id === id)];
    }

    findManyByNameAndIds(name, ids) {
        if (!this.data[name]) {
            return [];
        }
        return [...this.data[name].filter(record => ids.indexOf(record.id) > -1)];
    }

    findByName(name, value) {
        if (Array.isArray(value) && value.length > 0) {
            return [...this.data.filter(record => value.indexOf(record[name]) > -1)];
        }
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

    findByNamesRegex(names, searchTerm) {
        let found = [];

        for (const name of names) {
            found = [...found, ...this.findByNameRegex(name, searchTerm)];
        }

        return found;
    }

    findByValueInArray(name, value) {
        const records = [...this.data.filter((record) => {
            if (Array.isArray(record[name]) && record[name].length > 0) {
                return record[name].indexOf(value) > -1;
            }
            return record[name] === value;
        })];
        return records;
    }

    findAndSumByName(name, value, sumByName) {
        const records = [...this.data.filter((record) => {
            if (Array.isArray(record[name]) && record[name].length > 0) {
                return record[name].indexOf(value) > -1;
            }
            return record[name] === value;
        })];
        let result = 0;

        for (const data of records) {
            result += data[sumByName];
        }
        return result;
    }
}

const streamsModel = new DBHelper(streams.streams);
const channelsModel = new DBHelper(channels.channels);
const categoriesModel = new DBHelper(categories.categories);
const categoriesLocalizationModel = new DBHelper(categoriesLocalization.languages);
const tagsModel = new DBHelper(tags.tags);
const clipsModel = new DBHelper(clips.clips);
const localizationModel = new DBHelper(localization.languages);
const db = {
    streamsModel,
    channelsModel,
    categoriesModel,
    categoriesLocalizationModel,
    tagsModel,
    clipsModel,
    localizationModel,
};

export default db;