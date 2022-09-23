SELECT girl_group.name, song.title
	FROM girl_group
		INNER JOIN song
		ON girl_group.hit_song_id = song.sid
		ORDER BY girl_group.debut 
		LIMIT 5;
		
