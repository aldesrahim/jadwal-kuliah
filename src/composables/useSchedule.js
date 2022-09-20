import {useFetch} from '@/composables/useFetch.js';
import {ref, unref, watch, watchEffect} from 'vue';

export function useSchedule() {
    function fetchMap() {
        return useFetch('https://raw.githubusercontent.com/aldesrahim/jadwal-kuliah-data/main/map.json')
    }

    function formatData(dataValue) {
        if (!dataValue) {
            return dataValue
        }

        const today = new Date().toLocaleDateString('id', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).split('/').reverse().join('-')

        function getNumber(value) {
            return String(value).replace(/\D/g, '')
        }

        for (const data of dataValue) {
            data.id = getNumber(data.date)
            data.isToday = data.id === getNumber(today)

            for (const schedule of data.schedules) {
                schedule.description = `${schedule.startPeriod} - ${schedule.endPeriod} @ ${schedule.type} [${schedule.location}]`
            }
        }

        return dataValue
    }

    function fetchData(map, key) {
        const data = ref(null)
        const error = ref(null)
        const current = ref(null)

        function doFetch() {
            data.value = null
            error.value = null
            current.value = null

            const mapValue = unref(map)
            const keyValue = unref(key)

            try {
                if (!mapValue || !keyValue || !mapValue[keyValue]) {
                    throw true
                }

                const {data: fetchData, error: fetchError} = useFetch(mapValue[keyValue]['url'])

                watchEffect(() => {
                    data.value = formatData(fetchData.value)
                    error.value = fetchError.value
                    current.value = mapValue[keyValue]
                })
            } catch (e) {
                error.value = e
            }
        }

        doFetch()

        watch([map, key], () => {
            doFetch()
        })

        return {data, error, current}
    }

    return {fetchMap, fetchData}
}