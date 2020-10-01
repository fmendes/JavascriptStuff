// assumes no nulls
[ "a", "z", "ã" ].sort( ( a, b ) => a.localeCompare( b ) );

// with nulls last
[ null, "a", null, "z", "ã" ].sort( ( a, b ) => a && b ? a.localeCompare( b ) : ( a && ! b ? -1 : ( ! a && b ? 1 : 0 ) ) );

// with nulls first
[ null, "a", null, "z", "ã" ].sort( ( a, b ) => a && b ? a.localeCompare( b ) : ( a && ! b ? 1 : ( ! a && b ? -1 : 0 ) ) );
