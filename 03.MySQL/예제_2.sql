SELECT girl_group.name, song.title, girl_group.debut
	FROM girl_group
		INNER JOIN song
		ON girl_group.hit_song_id = song.sid
		WHERE girl_group.debut LIKE '2009%';