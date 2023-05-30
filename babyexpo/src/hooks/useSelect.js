import {useEffect} from 'react';
import * as SQLite from 'expo-sqlite';
export default (argcid) => {
    const [subListItems, setSubListItems] = useState([]);

    useEffect(() => {
        const db = SQLite.openDatabase('../screens/babyDatabase.db');

        let mounted = true;
        // Select query
        db.transaction((tx) => {
            if (mounted) {
                try {
                    tx.executeSql('SELECT * from baby_cat inner join baby_sub on baby_cat.cid = baby_sub.cid where baby_cat.active=1 and baby_sub.active=1 order by baby_cat.cat_id, baby_sub.sub_id', [],
                        [],
                        (tx, results) => {
                            var temp = [];
                            //console.log('TabPage' + results.rows.length);
                            for (let i = 0; i < results.rows.length; ++i)
                                temp.push(results.rows.item(i));
                            setSubListItems(temp);
                        },
                    );
                } catch (error) {
                    console.log('Error executing select query:', error);
                }
            }
        });
        //console.log(subListItems.length + ' husnegt urt');
        return function cleanup() {
            mounted = false;
        };
    }, []);

    return [subListItems];
}