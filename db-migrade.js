exports.up = function(db, callback) {

  //automatic mapping, the mapping key resolves to the column
  db.createTable( 'aggregate_id',
  {
      id:
      {
        type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 10
      },
      aggregate_id:
      {
        type: 'int',s
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'aggregate_id_fk',
          table: 'aggregate',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
  }, callback );
};

exports.up = function(db, callback) {

  //explicit mapping
  db.createTable( 'aggregate_id',
  {
    id:
    {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    aggregate_id:
    {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      foreignKey: {
        name: 'aggregate_id_fk',
        table: 'aggregate',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          aggregate_id: 'id'
        }
      }
    },
  }, callback );
};
